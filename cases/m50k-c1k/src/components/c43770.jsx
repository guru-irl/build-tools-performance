import React from 'react';
const LABEL_43770 = 'component_43770';
export function Component43770({ value = 43770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43770, 'data-value': derived.doubled }, children);
}
export default Component43770;
