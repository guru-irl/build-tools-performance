import React from 'react';
const LABEL_25288 = 'component_25288';
export function Component25288({ value = 25288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25288, 'data-value': derived.doubled }, children);
}
export default Component25288;
