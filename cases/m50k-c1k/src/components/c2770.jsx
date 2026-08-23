import React from 'react';
const LABEL_2770 = 'component_2770';
export function Component2770({ value = 2770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2770, 'data-value': derived.doubled }, children);
}
export default Component2770;
