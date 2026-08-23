import React from 'react';
const LABEL_9490 = 'component_9490';
export function Component9490({ value = 9490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9490, 'data-value': derived.doubled }, children);
}
export default Component9490;
