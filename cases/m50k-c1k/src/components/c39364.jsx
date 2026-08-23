import React from 'react';
const LABEL_39364 = 'component_39364';
export function Component39364({ value = 39364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39364, 'data-value': derived.doubled }, children);
}
export default Component39364;
