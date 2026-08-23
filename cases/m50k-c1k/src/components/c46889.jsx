import React from 'react';
const LABEL_46889 = 'component_46889';
export function Component46889({ value = 46889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46889, 'data-value': derived.doubled }, children);
}
export default Component46889;
