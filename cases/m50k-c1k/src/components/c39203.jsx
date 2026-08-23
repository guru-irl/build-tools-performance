import React from 'react';
const LABEL_39203 = 'component_39203';
export function Component39203({ value = 39203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39203, 'data-value': derived.doubled }, children);
}
export default Component39203;
