import React from 'react';
const LABEL_16146 = 'component_16146';
export function Component16146({ value = 16146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16146, 'data-value': derived.doubled }, children);
}
export default Component16146;
