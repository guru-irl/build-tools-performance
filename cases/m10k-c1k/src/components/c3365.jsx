import React from 'react';
const LABEL_3365 = 'component_3365';
export function Component3365({ value = 3365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3365, 'data-value': derived.doubled }, children);
}
export default Component3365;
