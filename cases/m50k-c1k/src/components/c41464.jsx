import React from 'react';
const LABEL_41464 = 'component_41464';
export function Component41464({ value = 41464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41464, 'data-value': derived.doubled }, children);
}
export default Component41464;
