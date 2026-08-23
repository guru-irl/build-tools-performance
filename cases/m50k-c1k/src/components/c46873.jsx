import React from 'react';
const LABEL_46873 = 'component_46873';
export function Component46873({ value = 46873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46873, 'data-value': derived.doubled }, children);
}
export default Component46873;
