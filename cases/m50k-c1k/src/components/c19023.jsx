import React from 'react';
const LABEL_19023 = 'component_19023';
export function Component19023({ value = 19023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19023, 'data-value': derived.doubled }, children);
}
export default Component19023;
