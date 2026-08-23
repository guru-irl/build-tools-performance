import React from 'react';
const LABEL_41719 = 'component_41719';
export function Component41719({ value = 41719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41719, 'data-value': derived.doubled }, children);
}
export default Component41719;
