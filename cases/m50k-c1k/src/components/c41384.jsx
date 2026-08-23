import React from 'react';
const LABEL_41384 = 'component_41384';
export function Component41384({ value = 41384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41384, 'data-value': derived.doubled }, children);
}
export default Component41384;
