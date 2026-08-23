import React from 'react';
const LABEL_29522 = 'component_29522';
export function Component29522({ value = 29522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29522, 'data-value': derived.doubled }, children);
}
export default Component29522;
