import React from 'react';
const LABEL_43561 = 'component_43561';
export function Component43561({ value = 43561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43561, 'data-value': derived.doubled }, children);
}
export default Component43561;
