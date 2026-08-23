import React from 'react';
const LABEL_20263 = 'component_20263';
export function Component20263({ value = 20263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20263, 'data-value': derived.doubled }, children);
}
export default Component20263;
