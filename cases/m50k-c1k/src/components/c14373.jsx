import React from 'react';
const LABEL_14373 = 'component_14373';
export function Component14373({ value = 14373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14373, 'data-value': derived.doubled }, children);
}
export default Component14373;
