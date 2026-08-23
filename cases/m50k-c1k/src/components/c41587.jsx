import React from 'react';
const LABEL_41587 = 'component_41587';
export function Component41587({ value = 41587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41587, 'data-value': derived.doubled }, children);
}
export default Component41587;
