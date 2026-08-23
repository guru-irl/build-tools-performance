import React from 'react';
const LABEL_16443 = 'component_16443';
export function Component16443({ value = 16443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16443, 'data-value': derived.doubled }, children);
}
export default Component16443;
