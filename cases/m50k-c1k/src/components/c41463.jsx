import React from 'react';
const LABEL_41463 = 'component_41463';
export function Component41463({ value = 41463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41463, 'data-value': derived.doubled }, children);
}
export default Component41463;
