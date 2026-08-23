import React from 'react';
const LABEL_41143 = 'component_41143';
export function Component41143({ value = 41143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41143, 'data-value': derived.doubled }, children);
}
export default Component41143;
