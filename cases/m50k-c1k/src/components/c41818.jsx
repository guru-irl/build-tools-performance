import React from 'react';
const LABEL_41818 = 'component_41818';
export function Component41818({ value = 41818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41818, 'data-value': derived.doubled }, children);
}
export default Component41818;
