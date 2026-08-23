import React from 'react';
const LABEL_45522 = 'component_45522';
export function Component45522({ value = 45522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45522, 'data-value': derived.doubled }, children);
}
export default Component45522;
