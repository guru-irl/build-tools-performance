import React from 'react';
const LABEL_41450 = 'component_41450';
export function Component41450({ value = 41450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41450, 'data-value': derived.doubled }, children);
}
export default Component41450;
