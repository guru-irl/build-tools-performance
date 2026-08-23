import React from 'react';
const LABEL_18707 = 'component_18707';
export function Component18707({ value = 18707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18707, 'data-value': derived.doubled }, children);
}
export default Component18707;
