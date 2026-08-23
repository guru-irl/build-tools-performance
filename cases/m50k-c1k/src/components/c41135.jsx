import React from 'react';
const LABEL_41135 = 'component_41135';
export function Component41135({ value = 41135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41135, 'data-value': derived.doubled }, children);
}
export default Component41135;
