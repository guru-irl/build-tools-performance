import React from 'react';
const LABEL_46462 = 'component_46462';
export function Component46462({ value = 46462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46462, 'data-value': derived.doubled }, children);
}
export default Component46462;
