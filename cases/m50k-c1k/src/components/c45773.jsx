import React from 'react';
const LABEL_45773 = 'component_45773';
export function Component45773({ value = 45773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45773, 'data-value': derived.doubled }, children);
}
export default Component45773;
