import React from 'react';
const LABEL_46353 = 'component_46353';
export function Component46353({ value = 46353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46353, 'data-value': derived.doubled }, children);
}
export default Component46353;
