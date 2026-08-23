import React from 'react';
const LABEL_41366 = 'component_41366';
export function Component41366({ value = 41366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41366, 'data-value': derived.doubled }, children);
}
export default Component41366;
