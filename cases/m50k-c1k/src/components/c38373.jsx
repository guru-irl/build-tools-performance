import React from 'react';
const LABEL_38373 = 'component_38373';
export function Component38373({ value = 38373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38373, 'data-value': derived.doubled }, children);
}
export default Component38373;
