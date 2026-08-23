import React from 'react';
const LABEL_32906 = 'component_32906';
export function Component32906({ value = 32906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32906, 'data-value': derived.doubled }, children);
}
export default Component32906;
