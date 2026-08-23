import React from 'react';
const LABEL_41335 = 'component_41335';
export function Component41335({ value = 41335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41335, 'data-value': derived.doubled }, children);
}
export default Component41335;
