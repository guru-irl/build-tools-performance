import React from 'react';
const LABEL_7975 = 'component_7975';
export function Component7975({ value = 7975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7975, 'data-value': derived.doubled }, children);
}
export default Component7975;
