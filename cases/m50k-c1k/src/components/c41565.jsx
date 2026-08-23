import React from 'react';
const LABEL_41565 = 'component_41565';
export function Component41565({ value = 41565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41565, 'data-value': derived.doubled }, children);
}
export default Component41565;
