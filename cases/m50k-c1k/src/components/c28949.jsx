import React from 'react';
const LABEL_28949 = 'component_28949';
export function Component28949({ value = 28949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28949, 'data-value': derived.doubled }, children);
}
export default Component28949;
