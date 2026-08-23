import React from 'react';
const LABEL_19024 = 'component_19024';
export function Component19024({ value = 19024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19024, 'data-value': derived.doubled }, children);
}
export default Component19024;
