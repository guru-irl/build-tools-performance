import React from 'react';
const LABEL_16719 = 'component_16719';
export function Component16719({ value = 16719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16719, 'data-value': derived.doubled }, children);
}
export default Component16719;
