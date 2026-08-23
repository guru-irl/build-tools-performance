import React from 'react';
const LABEL_45403 = 'component_45403';
export function Component45403({ value = 45403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45403, 'data-value': derived.doubled }, children);
}
export default Component45403;
