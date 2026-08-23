import React from 'react';
const LABEL_36863 = 'component_36863';
export function Component36863({ value = 36863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36863, 'data-value': derived.doubled }, children);
}
export default Component36863;
