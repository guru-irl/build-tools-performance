import React from 'react';
const LABEL_33081 = 'component_33081';
export function Component33081({ value = 33081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33081, 'data-value': derived.doubled }, children);
}
export default Component33081;
