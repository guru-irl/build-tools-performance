import React from 'react';
const LABEL_41058 = 'component_41058';
export function Component41058({ value = 41058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41058, 'data-value': derived.doubled }, children);
}
export default Component41058;
