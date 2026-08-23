import React from 'react';
const LABEL_41270 = 'component_41270';
export function Component41270({ value = 41270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41270, 'data-value': derived.doubled }, children);
}
export default Component41270;
