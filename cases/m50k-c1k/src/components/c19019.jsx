import React from 'react';
const LABEL_19019 = 'component_19019';
export function Component19019({ value = 19019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19019, 'data-value': derived.doubled }, children);
}
export default Component19019;
