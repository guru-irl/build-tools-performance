import React from 'react';
const LABEL_45996 = 'component_45996';
export function Component45996({ value = 45996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45996, 'data-value': derived.doubled }, children);
}
export default Component45996;
