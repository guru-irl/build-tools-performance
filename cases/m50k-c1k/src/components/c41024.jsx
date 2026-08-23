import React from 'react';
const LABEL_41024 = 'component_41024';
export function Component41024({ value = 41024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41024, 'data-value': derived.doubled }, children);
}
export default Component41024;
