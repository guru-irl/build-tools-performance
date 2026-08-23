import React from 'react';
const LABEL_13522 = 'component_13522';
export function Component13522({ value = 13522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13522, 'data-value': derived.doubled }, children);
}
export default Component13522;
