import React from 'react';
const LABEL_43960 = 'component_43960';
export function Component43960({ value = 43960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43960, 'data-value': derived.doubled }, children);
}
export default Component43960;
