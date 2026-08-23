import React from 'react';
const LABEL_13295 = 'component_13295';
export function Component13295({ value = 13295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13295, 'data-value': derived.doubled }, children);
}
export default Component13295;
