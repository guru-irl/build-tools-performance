import React from 'react';
const LABEL_41949 = 'component_41949';
export function Component41949({ value = 41949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41949, 'data-value': derived.doubled }, children);
}
export default Component41949;
