import React from 'react';
const LABEL_41507 = 'component_41507';
export function Component41507({ value = 41507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41507, 'data-value': derived.doubled }, children);
}
export default Component41507;
