import React from 'react';
const LABEL_41530 = 'component_41530';
export function Component41530({ value = 41530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41530, 'data-value': derived.doubled }, children);
}
export default Component41530;
