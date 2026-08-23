import React from 'react';
const LABEL_4473 = 'component_4473';
export function Component4473({ value = 4473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4473, 'data-value': derived.doubled }, children);
}
export default Component4473;
