import React from 'react';
const LABEL_37073 = 'component_37073';
export function Component37073({ value = 37073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37073, 'data-value': derived.doubled }, children);
}
export default Component37073;
