import React from 'react';
const LABEL_4522 = 'component_4522';
export function Component4522({ value = 4522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4522, 'data-value': derived.doubled }, children);
}
export default Component4522;
