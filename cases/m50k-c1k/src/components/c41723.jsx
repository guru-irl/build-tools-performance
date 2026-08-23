import React from 'react';
const LABEL_41723 = 'component_41723';
export function Component41723({ value = 41723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41723, 'data-value': derived.doubled }, children);
}
export default Component41723;
